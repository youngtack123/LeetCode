var destCity = function(paths) {
    const outgoingCities = new Set();
    const destinationCities = new Set();
    
    // 출발지와 도착지를 분리하여 Set에 추가합니다.
    paths.forEach(([source, destination]) => {
        outgoingCities.add(source);
        destinationCities.add(destination);
    });
    
    // 도착지에서 출발하지 않는 도시를 찾습니다.
    for (const city of destinationCities) {
        if (!outgoingCities.has(city)) {
            return city;
        }
    }
};
