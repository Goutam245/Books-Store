import { toast } from "react-toastify";

const getStoreReadList = () =>{
       // read-list
       const storedListstr = localStorage.getItem('read-list')
       if(storedListstr){
       const storedList = JSON.parse(storedListstr)
       return storedList
       }
       else{
        return [];
       }

}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList()
    if(storedList.includes(id)){
       // Alraedy exists. do not add it
       console.log(id, 'alrady exists in the read list')
    }
    else{
        storedList.push(id)
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListstr)
        // Ideally triger toast from the component
        toast('This Book is added to your read list')
    }
}
const getWishStoreReadList = () =>{
       // read-list
       const WhisstoredListstr = localStorage.getItem('read-list')
       if(WhisstoredListstr){
       const wishstoredList = JSON.parse(WhisstoredListstr)
       return wishstoredList
       }
       else{
        return [];
       }

}

const addToStoreWishList = (id) => {
    const wishstoredList = getWishStoreReadList()
    if(wishstoredList.includes(id)){
       // Alraedy exists. do not add it
       console.log(id, 'alrady exists in the read list')
    }
    else{
        wishstoredList.push(id)
        const WhisstoredListstr = JSON.stringify(wishstoredList);
        localStorage.setItem('wish-list',WhisstoredListstr)
    }
}

export {addToStoreReadList, getStoreReadList}
export {addToStoreWishList}
