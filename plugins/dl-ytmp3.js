/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,command:t,text:r,args:l})=>{if(!r)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+t} https://youtu.be/PPNzvu5RYq4`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return e.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let i;await e.reply(MultiNK.Proces(await a.getName(e.sender)));let n=encodeURIComponent(r);try{let o=await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=${MyApiKey}&q=${n}`),u=await getBuffer(o.logo);a.sendMessage(e.chat,{audio:{url:o.descarga},contextInfo:{externalAdReply:{title:`${o.titulo}`,body:`${NombreDelBot} 🔥}`,previewType:"PHOTO",thumbnailUrl:"",thumbnail:u,sourceUrl:`${o.descarga}`}},mimetype:"audio/mpeg",fileName:`${o.titulo}.mp3`},{quoted:e}).catch(t=>{a.sendButton(e.chat,"*[ ! ] Ocurrio un error inesperado u.u [ ! ]*","Toque el boton para usar otra alternativa",NombreDelBot,["[ ♻️ REINTENTAR ]",Prefijo+`yta ${l[0]}`],e)})}catch(d){e.reply(MultiNK.Error0())}};handler.help=["ytmp3 <link>"],handler.tags=["servicio"],handler.command=/^(ytmp3)$/i,handler.limit=!0;export default handler;
