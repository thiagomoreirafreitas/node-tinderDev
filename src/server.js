const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://thiago:guns1992@cluster0-rt4fk.mongodb.net/omni?retryWrites=true&w=majority',
{useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);