
function divideByGroup(data,jumlah){
    jumlah = parseInt(jumlah)
    let minimumDataPerGroup = Math.floor(data.length / jumlah)
    let temp = []
    let result = []

    while(data.length !== 0){
        if(result.length === jumlah){
            break
        }
        if(minimumDataPerGroup === 0){
            minimumDataPerGroup = 1
        }
        let index = Math.floor(Math.random()*data.length)
        temp.push(data[index])
        data.splice(index,1)
        if(temp.length === minimumDataPerGroup){
            result.push(temp)
            temp = []
        }
    }

    while(data.length !== 0){
        let indexArr = Math.floor(Math.random()*jumlah)
        let indexData = Math.floor(Math.random()*data.length)
        result[indexArr] = [...result[indexArr], ...temp]
        result[indexArr].push(data[indexData])
        data.splice(indexData,1)
    }
    return {
        group : result,
        sisa : data
    }
}

function divideByData(data,jumlah){
    jumlah = parseInt(jumlah)
    let temp = []
    let result = []
    while(data.length !== 0){
        let index = Math.floor(Math.random()*data.length)
        temp.push(data[index])
        data.splice(index,1)
        if(temp.length === jumlah){
            result.push(temp)
            temp = []
        }
    }
    return {
        group : result,
        sisa : temp
    }
}

function groupDivider(data,config){
    let dataSplited = data.split(/,|\n/)
    let totalLength = dataSplited.length
    let { mode, jumlah } = config
    let finalData = []
    if(mode == '1'){
        let res = divideByGroup(dataSplited,jumlah)
        finalData = res.group
        if(finalData.length !== jumlah){
            for(let i = finalData.length;i < jumlah; i++){
                finalData.push([])
            }
        }
    }else if(mode == '2'){
        let res = divideByData(dataSplited,jumlah)
        res.group.forEach(i => {
            finalData.push(i)
        })
        if (res.sisa.length !== 0){
            finalData.push(res.sisa)
        }
    }

    

    return {
        data: finalData,
        total: totalLength
    }
}

export default groupDivider