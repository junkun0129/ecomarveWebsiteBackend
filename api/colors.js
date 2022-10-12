export default function j(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    const color=[
        {name:"杏", color1:"199, 113, 64", color2:"201, 52, 2"},
        {name:"藍", color1:"99, 90, 148", color2:"22, 4, 93"},
        {name:"鶯", color1:"85, 137, 80", color2:"39, 79, 54"},
        {name:"青朽葉", color1:"151, 144, 79", color2:"99, 97, 39"},
        {name:"薄浅葱", color1:"102, 154, 141", color2:"36, 112, 96"},
        {name:"葡萄染", color1:"129, 87, 144", color2:"93, 7, 100"},
        {name:"珊瑚珠", color1:"212, 73, 73", color2:"169, 0, 0"},
        {name:"天", color1:"83, 106, 188", color2:"29, 95, 133"}
    ]
    //const q=[{name: "jumi", number: 55555, type:"kure"}, {name: "yuko", number: 11111, type:"iwelsk"}]
    console.log("unko");
   
    // console.log(body.JSON.stringify(data))
    response.status(200).json({
        //a:request.body
        //q:request.body
        color
        
    })


    
}