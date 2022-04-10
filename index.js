function writeCards(names, event){
    messageList=[]
for (let name of names) {
    messageList.push(`Thank you, ${name}, for the wonderful ${event} gift!`)

    
}
console.log(messageList)
return messageList

}

writeCards(["omer","ali","mehmet"],"dogumguu")

function countDown(param) {
    while (param>0) {
        if (param>0) {
            console.log(param)
            param--
            if(param=="0"){console.log(param)}
        }
}}

countDown(10)