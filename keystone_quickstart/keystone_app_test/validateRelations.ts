export const validateRelationship = (relations:string[],resolvedData:Record<string, any>,addValidationError:(error: string) => void,operation:string)=>{
    
    relations.forEach((relation:string,i:number)=>{
        let relationship = resolvedData[relation]

        if(operation === 'create' && relationship === undefined){
            addValidationError(` ${relation} is required for creating`)
        }

        if(operation === 'update' && relationship?.disconnect){
            addValidationError(` ${relation} is required for updating`)
        }
    })
}