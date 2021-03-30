
function superbowlWin(record) {
    let res = record.find( superbowl => superbowl.result === 'W');
    return res ? res.year : res;
}