let eateries = [];

export const useEateries = () => eateries.slice();

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(eateryResponse => eateryResponse.json())
        .then(
            parsedEateries => {
                eateries = parsedEateries;
            }
        );
};