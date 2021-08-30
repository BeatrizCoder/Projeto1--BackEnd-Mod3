// imagemUrl:"link",( por no lugar de descricao)
//201 porta de criado com sucess//
//URL LINK NORMAL, tipo localhost, qnd uma url esta atrelado a um porta uri jucao das 2 coisas//
//nao esquecer do npm run dev pra testar no thunder//

const express= require("express");
const JogoSchema= require("./models/jogos");
const mongoose= require("./database");

const app =express();
const port=3000;
app.use(express.json());

app.get("/",( req, res) => {
res.send({info:"Hey Database, Mongo DB"});

});

app.get("/jogos", async(req, res) =>{
    const jogos=await JogoSchema.find();
    res.send({jogos});
});

app.get("/jogos/:id", async(req, res) =>{
    const id=req.params.id;
    if(mongoose.Types.ObjectId.isValid(id)){
      res.status(422).send({error:"Invalid Id"});
      return;  
    }
});

    app.post("/jogos/:id/", async(req, res) => {
    const filme = await FilmeSchema.findById(id);
   if(!jogo) {
       res.status(404).send({erro:"game not found"});
       return;
       }
       res.send({jogo});
   });

   app.post("/jogos", async(req, res) => {
       const jogo=req.body; 
       if(!jogo|| !jogo.nome || !jogo.ImagemUrl){
        res.status(400).send({error:"Invalid Game"});
        return;
       }
       
  const novoJogo= await new JogoSchema(jogo).save();
  res.status (201).send({novoJogo});
});

app.put("/jogos/:id", async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(422).send({error:"Invalid ID"});
        return;
    }
    const jogo= await JogoSchema.findById(id);
    if(!jogo){
        res.status(404).send({erro:"game not found"});
        return;
    }
    const novoJogo=req.body;

    if(!jogo|| !jogo.nome || !jogo.ImagemUrl){
        res.status(400).send({error:"Invalid Game"});
        return;
    }
await JogoSchema.findOneAndUpdate({_id:id}, novoJogo);

const jogoAtualizado= await JogoSchema.findById(id);

res.send({jogoAtualizado});
});

app.delete("/jogos/:id", async(req, res) =>{
    const id=req.params.id;

if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(422).send({error:"Invalid ID"});
    return;
}
const jogo= await JogoSchema.findById(id);
if (!jogo) {
    res.status(404).send({erro:"game not found"});
    return;
}
await JogoSchema.findByIdAndDelete(id);
res.send({message:'successfully deleted game'})

});

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
    }
);