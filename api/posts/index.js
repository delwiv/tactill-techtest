import Author from './author';
import Post from './post';
import Category from './category';
import { Router as expressRouter } from 'express';

const router = expressRouter();

router.get('/', (req, res) => Post.find().then(posts => res.json(posts)));
router.post('/', (req, res) => Post.create(req.body.post)
    .then(post => res.json(post))
    .catch(() => res.status(400).end()));

router.get('/categories', (req, res) => Category.find().then(categories => res.json(categories)));
router.post('/categories', (req, res) => Category.create(req.body.category)
    .then(category => res.json(category))
    .catch(() => res.status(400).end()));

router.get('/authors', (req, res) => Author.find().then(authors => res.json(authors)));
router.post('/authors', (req, res) => Author.create(req.body.author)
    .then(author => res.json(author))
    .catch(() => res.status(400).end()));


export default router;
