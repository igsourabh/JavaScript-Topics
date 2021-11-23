
function fruitsiteatio(value) {
    let nextindex=0;
    return {
        next: function () {
            if (nextindex < value.length) {
                return {
                    values: value[nextindex++],
                    done: false
                }

            }
            else {
                return { done: true }
            }
        }

    }

}


const myarray = ["apple", "grapes", "Banana"]


const fruits= fruitsiteatio(myarray)
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
