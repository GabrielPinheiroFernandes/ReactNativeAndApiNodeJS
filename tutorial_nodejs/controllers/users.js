const express = require('express'); // Importa o módulo Express
const router = express.Router(); // Cria uma nova instância de roteador do Express
const db = require('./../db/models'); // Importa os modelos do banco de dados

// Rota GET para obter todos os usuários
router.get('/users', async (req, res) => {

    // Receber o número da página, se não for enviado o número atribui 1
    const {page = 1} = req.query;
    // console.log(page);

    // Limite de registros em cada página
    const limit = 10;

    // Variável com o número da última página
    var lastPage = 1;

    // Conta quantos registros tem no banco de dados
    const contUser = await db.users.count();
    // console.log(contUser);

    // Se a tabela user não conter nenhum registro
    if(contUser !== 0) {
        lastPage = Math.ceil(contUser/limit);
        // console.log(lastPage);
    } else {
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: 'Erro: nenhum usuário encontrado!'
        });
    }

    // Busca todos os usuários no banco de dados e ordena pelo campo 'id' em ordem decrescente
    const users = await db.users.findAll({
        // Indicar quais colunas recuperar
        attributes: ['id', 'name', 'email'],

        order: [['id', 'ASC']],

        // Calcular a partir de qual registro deve retornar e o limite de registros
        offset: Number((page * limit) - limit),
        limit: limit
    });

    // Se encontrar usuários, retorna-os em uma resposta JSON
    if (users) {
        // Criar objeto com as informações para paginação
        var pagination = {
            // Caminho
            path: '/users',
            page,
            // Se pagina atual - 1 for igual a 1 faça pagina atual menos 1 senão false (não há uma página anterior válida)
            prev_page_url: page - 1 >= 1 ? page - 1 : false,

            // Se pagina atual + 1 for maior ou igual a ultima pagina (Já estara na ultima pagina então vai receber false) senão é só somar pagin atual + 1 que ira mostrar a proxima pagina
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),

            lastPage
        }

        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            users, 
            pagination
        });
    } else {
        // Se não encontrar usuários, retorna um status 400 com uma mensagem de erro
        return res.status(400).json({
            mensagem: "Não existem usuários cadastrados!"
        });
    }
});

// Rota GET para obter um usuário específico pelo ID
router.get('/users/:id', async (req, res) => {

    const {id} = req.params;
    // console.log(id);

    const user = await db.users.findOne({
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],

        where: {id},
    })
    // console.log(user);

    if(user) {
        return res.json({
            user
        });
    } else {
        return res.status(400).json({
            mensagem: "Erro usuário não cadastrado!"
        });
    };
})
// Rota POST para criar um novo usuário
router.post('/users', async (req, res) => {
    var dados = req.body; // Obtém os dados do corpo da requisição
    // console.log(dados); // Loga os dados no console

    // Tenta criar um novo usuário com os dados fornecidos
    await db.users.create(dados).then((dadosUsuario) => {
        // Se a criação for bem-sucedida, retorna uma mensagem de sucesso e os dados do usuário criado
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        // Se ocorrer um erro, retorna uma mensagem de erro
        return res.json({
            mensagem: "Erro usuário não cadastrado!"
        });
    });
});

router.put('/users', async (req, res) => {

    var dados = req.body; // Obtém os dados do corpo da requisição

    try {
        const [numAffectedRows] = await db.users.update(dados, { where: { id: dados.id } });

        if (numAffectedRows === 0) {
            // Nenhum registro foi atualizado, lance um erro
            throw new Error('Usuário não encontrado');
        }

        return res.json({
            mensagem: "Usuário editado com sucesso!"
        });
    } catch {
        return res.status(400).json({
            mensagem: "Erro: Usuário não encontrado!"
        });
    }
})

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await db.users.destroy({ where: { id } });
        return res.json({
            mensagem: "Usuário apagado com sucesso!"
        });
    } catch (error) {
        return res.status(400).json({
            mensagem: "Erro: Usuário não foi apagado!"
        });
    }
});

module.exports = router; // Exporta o roteador para ser usado em outros arquivos
