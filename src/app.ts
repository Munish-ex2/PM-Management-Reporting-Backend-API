import 'reflect-metadata'
// import * as express from "express";
import * as cors from "cors";
// import userIndexRouter from './routes/user-routes/index.route';
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/apiv1", userIndexRouter)

// app.get("/", (req, res) => {
//   res.send("Hey you i'm here...")
// })

// // this is for 404
// app.use(function (req, res, next) {
//   res.status(404).send(" route not found");
// });

// export default app

import * as express from "express";
import folderRouter from "./routes/folders.route";
import assigneeRouter from './routes/assignees.route';
import spaceRouter from './routes/space.route';
import listRouter from './routes/lists.route';
import { filteredTasksWithWorkSpaceIdRouter, filteredTasksWithFolderIdRouter, filteredTasksWithListIdRouter } from './routes/filteredTasks.route';
import workSpacesRouter from './routes/workSpaces.route';
import folderLessListsRouter from './routes/folderLessLists.route';

const app = express();

const serverName: string = '127.0.0.1';

const portName: number = 5500;

app.use('/workSpaces', workSpacesRouter)
app.use('/folders', folderRouter);
app.use('/assignees', assigneeRouter);
app.use('/spaces', spaceRouter);
app.use('/lists', listRouter);
app.use('/folderlesslists', folderLessListsRouter);

app.use('/tasks', filteredTasksWithWorkSpaceIdRouter);
app.use('/tasks', filteredTasksWithFolderIdRouter);
app.use('/tasks', filteredTasksWithListIdRouter);




app.listen(portName, serverName, ()=>{
    console.log("Server is working!")
})
