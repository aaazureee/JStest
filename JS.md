<style>
    img {   
        width: 35%;
    }
</style>

<img src = "https://secure.meetupstatic.com/photos/event/8/7/d/4/highres_196174772.jpeg" alt = "JSlogo" >
## JS lessons learnt:
### Note the powerful usage of methods:  

- #### Working with arrays basic:
    - Spread and Rest operator: **`...arr`**
    - **`lastIndexOf`**: finding item from the right.
    - **`slice`**: If negative parameter is passed, slice the array from the right.  
    ```
        var array = [1, 2, 3, 4, 5, 6];
        console.log(array.slice(-1)); // [6]    
        console.log(array.slice(-2)); // [5,6]  
    ```
    - **`splice`** (both remove and add at same time).  
            splice(start index, number of items to remove, items will add)
    - #### Note: 
        Some methods don't change the current array so you need to assign to new one.
    ##### For example:
    _Wrong: _ `arr.split("");`  
    **Right: ** `newArr = arr.split("");`
    
    
    
- #### To reverse a string: 
    - `str.split("").reverse().join("");`
- #### Filter with array:
    - `arr.filter.(x => x !== 3)` : Keep values that are not 3 in the array (remember to assign to a new array).
    - Can also work with strings like this `arr.filter.(x => x !== "!");`