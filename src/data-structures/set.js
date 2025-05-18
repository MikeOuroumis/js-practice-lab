function intersection(set1, set2) {
  let resultSet = new Set();
  for (let elem of set1) {
    if (set2.has(elem)) {
      resultSet.add(elem);
    }
  }
  return resultSet;
}

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
console.log("intersection", intersection(set1, set2));

function audienceOverlap(blog1, blog2) {
  const set1 = new Set(blog1);

  return !blog2.some((item) => set1.has(item));
}

let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];
if (audienceOverlap(blog1, blog2))
  console.log("Yes, there is an audience overlap between both blogs.");
else console.log("No, there is no audience overlap between both blogs.");
