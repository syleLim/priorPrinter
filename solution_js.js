const solution = (priorities, location) => {
    let sortPriorities = priorities.map(e => e).sort((a, b) => a - b);
    let max = sortPriorities.pop();
    let count = 0;
    while (sortPriorities.length)
    {
        while (priorities.length)
        {
            if (priorities[0] === max)
            {
                max = sortPriorities.pop();
                priorities.shift();
                count++;
                if (location === 0)
                    return (count);
                location--;
            }
            else
            {
                priorities.push(priorities.shift());
                location--;
                if (location === -1)
                    location = priorities.length - 1;
            }
        }
    }
}