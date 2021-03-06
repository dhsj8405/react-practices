import http from 'http';
import * as path from 'path'        //unnamed default
import express from 'express'

const port = 8080;

const application = express().use(express.static(path.join(path.resolve('.'), 'public')));

// 웹 서버 객체 만들기
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`)
    })
    .listen(port);