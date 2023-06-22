export const buildSleeps = (adults, children) => {
    const count = adults + children;
    const sleeps = [];
    for (let i = 0; i < count; i++) {
        sleeps.push(<i className="icon-man text-24" key={`sleep-${i}`}></i>)

        if (i > 0) {
            sleeps.push(<i className="icon-plus text-12" key={`sleep-${i}-plus`}></i>)
            break;
        }
    }
    return sleeps;
}