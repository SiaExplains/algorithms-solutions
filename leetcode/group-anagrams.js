/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagrams = [];
    while (strs.length != 0) {
        let current = strs.shift().split('').sort().join('');
        let map = [];
        map.push(current);
        strs.map((t, index) => {
            let temp = t;
            if (t.split('').sort().join('') === current) {
                map.push(temp);
                strs.splice(index, 1);
            }
        });
        anagrams.push(map);
    }

    return anagrams;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
