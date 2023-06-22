export const buildRating = (numbers) => {
    const ratings = [];
    for (let i = 0; i < numbers; i++) {
        ratings.push(<i className="icon-star text-10 text-yellow-2" key={`rating-${i}`}></i>)
    }
    return ratings;
}