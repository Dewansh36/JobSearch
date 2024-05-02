import { action, observable } from "mobx";


function LikeStore() {
    let likes = observable(0);

    const incrementLikes = action(() => {
        likes = likes + 1;
    });

    const decrementLikes = action(() => {
        likes = likes - 1;
    });


    return {
        likes,
        incrementLikes,
        decrementLikes
    };

}

export default LikeStore();