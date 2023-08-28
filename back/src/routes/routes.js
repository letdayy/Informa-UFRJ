const Express = require('express');
const router = Express();

const UserController = require('../controllers/UserController');
const PostConstroller = require('../controllers/PostConstroller');
const FavoriteController = require('../controllers/FavoriteController');
const CommentController = require('../controllers/CommentController');

const path = require("path");
const multer = require("multer");
const storage = require("../config/files");
const Post = require('../models/Post');

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname);
        if(ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg"){
            return cb(new Error ("erro: extensão não suportada"), false);
        }
        cb(null, true)
    },
    limits: {
        fileSize: 2048*2048
    }
});

router.post('/User/addUserPhoto/Photo/:id', upload.single('path'), UserController.addUserPhoto);
router.post('/Post/addPostPhoto/Photo/:id', upload.single('path'), PostConstroller.addPostPhoto);
router.delete('/deleteUserPhoto/Photo/:id', UserController.deleteUserPhoto);
router.delete('/deletePostPhoto/Photo/:id', PostConstroller.deletePostPhoto);

//rotas para User
router.post('/User', UserController.create);
router.get('/User/:id', UserController.show);
router.get('/User', UserController.index);
router.put('/User/:id', UserController.update);
router.delete('/User/:id', UserController.destroy);
router.put('/follow/User/:id', UserController.follow);
router.delete('/unfollow/User/:id', UserController.unfollow);


//rotas para Post
router.post('/Post', PostConstroller.create);
router.get('/Post/:id', PostConstroller.show);
router.get('/Post', PostConstroller.index);
router.put('/Post/:id', PostConstroller.update);
router.delete('/Post/:id', PostConstroller.destroy);

//rotas para Favorite
router.get('/Favorites/User/:userId', FavoritesController.index);
router.put('/addToFavorites/User/:userId/Music/:musicId', FavoritesController.addToFavorites);
router.delete('/removeFromFavorites/User/:userId/Music/:musicId', FavoritesController.removeFromFavorites);


//rotas para Comment
router.post('/Comment', CommentController.create);
router.get('/Comment/:id', CommentController.show);
router.get('/Comment/Music/:musicId', CommentController.index);
router.put('/Comment/:id', CommentController.update);
router.delete('/Comment/User/:userId/Music/:musicId', CommentController.destroy);
router.put('/addComment/Music/:musicId/User/:userId', CommentController.addComment);


//rotas para Community

module.exports = router;
