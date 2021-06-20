const usersController = {
    login: (req,res) => {
       res.render ('login');
    },

    registro: (req,res) => {
        res.render ('registro');
    },
    profileAdmin: (req,res) => {
        res.render ('profileAdmin');
    },
    profileUser: (req,res) => {
        res.render ('profileUser');
    }  
};

module.exports = usersController; 