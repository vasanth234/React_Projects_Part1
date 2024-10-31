const { Server } = require("socket.io");

const io = new Server(5005,{ 
    cors:{
        origin:"http://localhost:3000"
    }
 });

 let onlineUsers=[];


 const addNewUser=(username,socketId)=>{   // this comes from the client
!onlineUsers.some((user)=>user.username===username) && onlineUsers.push({username,socketId})
 }

 const removeUser=(socketId)=>{
  onlineUsers=onlineUsers.filter((user)=>user.socketId!==socketId);
 }

 const getUser=(username)=>{
  return onlineUsers.find((user)=>user.username===username)
 }
io.on("connection", (socket) => {

  socket.on("newUser",(username)=>{
    addNewUser(username,socket.id)
  })

  socket.on("sendNotifications",({senderName,receiverName,type})=>{
    const receiver=getUser(receiverName)
    io.to(receiver.socketId).emit("getNotification",{
      senderName,
      type,
    })

  })
  socket.on("disconnect", ()=>{
    removeUser(socket.id)
  })
});

//io.listen(5005);