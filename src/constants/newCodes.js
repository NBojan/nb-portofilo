const newCodes = ( projects ) => {
    let codes = [];

    projects.forEach(project => {
        project.codes.codes.forEach(code => codes.push(code));
    })
    
    const uniqueCodes = [...new Set(codes)]
    return uniqueCodes
}
 
// let values = {};
    // codes.forEach(item => {
    //     item.codes.codes.forEach(code => {
    //         if(values[code]) values[code] = values[code] + 1;
    //         else values = {...values, [code]: 1}
    //     })
    // })
    // const actualCodes = Object.keys(values);
    // return actualCodes;
export default newCodes;