import 'reflect-metadata';
import * as express from "express";
import folderRouter from "./routes/folders.route";
import assigneeRouter from './routes/assignees.route';
import spaceRouter from './routes/space.route';
import timetrackedRouter from './routes/timetracked.route';

const app = express();

const serverName: string = '127.0.0.1';

const portName: number = 5500;

app.use('/folders', folderRouter);
app.use('/assignees', assigneeRouter);
app.use('/spaces', spaceRouter);
app.use('/time', timetrackedRouter);

app.listen(portName, serverName, ()=>{
    console.log("Server is working!")
})