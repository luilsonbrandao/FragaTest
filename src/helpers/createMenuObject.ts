type MenuOption = "" | "all" | "regionais" | "mundo" | "funcionais";

export const createMenuObject = (activeMenu: MenuOption) => {
    let returnObject = {
        all: false,
        regionais: false,
        mundo: false,
        funcionais: false
    };
    
    if (activeMenu !== "") {
        returnObject[activeMenu] = true;
    } 

    return returnObject;
}