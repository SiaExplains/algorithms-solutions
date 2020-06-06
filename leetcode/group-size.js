/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let subGroups = [];
    let checked = [];
    for (let i = 0; i < groupSizes.length; i++) {
        if (checked.find(g => g === groupSizes[i])) {
            continue;
        }

        let sg = [];
        for (let j = 0; j < groupSizes.length; j++) {
            if (groupSizes[i] === groupSizes[j]) {
                if (sg.length === groupSizes[i]) {
                    subGroups.push([...sg]);

                    sg = [];
                }
                sg.push(j);
            }
        }
        subGroups.push([...sg]);
        checked.push(groupSizes[i]);
    }
    return subGroups;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
