import ApiFoot from '@/services/ApiFoot'

var apiKey = 1;

export default {
    setApiKey(key){
        apiKey = key
    },
    getTeamByName(name){
        name = makeUrl(name)
        return ApiFoot()
            .get(`${apiKey}/searchteams.php?t=${name}`).data;
    },
    getTeamByShortCode(code){
        code = makeUrl(code)
        return ApiFoot()
            .get(`${apiKey}/searchteams.php?sname=${code}`).data;
    },
    getAllPlayersByTeam(name){
        name = makeUrl(name)
        return ApiFoot()
            .get(`${apiKey}/searchplayers.php?t=${name}`).data;
    },
    getPlayerByName(name, team){
        name = makeUrl(name)
        team = makeUrl(team)
        var params = []
        params.push(`p=${name}`)
        if(team) params.push(`t=${team}`)
        return ApiFoot()
            .get(`${apiKey}/searchplayers.php?${params.join('&')}`).data;
    },
    getEventByName(name, season){
        name = makeUrl(name)
        season = makeUrl(season)
        var params = []
        params.push(`e=${name}`)
        if(season) params.push(`s=${season}`)
        return ApiFoot() 
            .get(`${apiKey}/searchevents.php?${params.join('&')}`).data;
    },
    getSportsList(){
        return ApiFoot() 
            .get(`${apiKey}/all_sports.php`).data;
    },
    getLeagueList(){
        return ApiFoot() 
            .get(`${apiKey}/all_leagues.php`).data;
    },
    getCountryList(){
        return ApiFoot() 
            .get(`${apiKey}/all_countries.php`).data;
    },
    getLeagueListByCountry(country, sport){
        country = makeUrl(country)
        sport = makeUrl(sport)
        var params = []
        params.push(`c=${country}`)
        if(sport) params.push(`s=${sport}`)
        return ApiFoot() 
            .get(`${apiKey}/search_all_leagues.php?${params.join('&')}`).data;
    },
    getSeasonsInLeagueById(id){
        return ApiFoot() 
            .get(`${apiKey}/search_all_seasons.php?id=${id}`).data;
    },
    getTeamsByLeagueName(name){
        name = makeUrl(name)
        return ApiFoot() 
            .get(`${apiKey}/search_all_teams.php?l=${name}`).data;
    },
     getTeamsByCountryAndSport(sport, country){
        country = makeUrl(country)
        sport = makeUrl(sport)
        return ApiFoot() 
            .get(`${apiKey}/search_all_teams.php?s=${sport}&c=${country}`).data;
    },
    //  getTeamDetailsById(id){
    //     return axios.get(`1/lookup_all_teams.php?id=${id}`).data;
    // },
    getPlayersByTeamId(id){
        return ApiFoot() 
            .get(`${apiKey}/lookup_all_players.php?id=${id}`).data;
    },
     getUsersLoved(user){
        user = makeUrl(user)
        return ApiFoot()
            .get(`${apiKey}/searchloves.php?u=${user}`).data;
    },
    getLeagueDetailsById(id){
        return ApiFoot() 
            .get(`${apiKey}/lookupleague.php?id=${id}`).data;
    },
    getTeamDetailsById(id){
        return ApiFoot()
            .get(`${apiKey}/lookupteam.php?id=${id}`).data;
    },
    getPlayerDetailsById(id){
        return ApiFoot()
            .get(`${apiKey}/lookupplayer.php?id=${id}`).data;
    },
    getEventDetailsById(id){
        return ApiFoot() 
            .get(`${apiKey}/lookupevent.php?id=${id}`).data;
    },
    getPlayerHonoursById(id){
        return ApiFoot() 
            .get(`${apiKey}/lookuphonors.php?id=${id}`).data;
    },
    getPlayerFormerTeamsById(id){
        return ApiFoot()
            .get(`${apiKey}/lookupformerteams.php?id=${id}`).data;
    },
    getPlayerContractsById(id){
        return ApiFoot()
            .get(`${apiKey}/lookupcontracts.php?id=${id}`).data;
    },
    getEventResultsById(id){
        return ApiFoot()
            .get(`${apiKey}/eventresults.php?id=${id}`).data;
    },
    getTvEventById(id){
        return ApiFoot() 
            .get(`${apiKey}/lookuptv.php?id=${id}`).data;
    },
    getLookupTableByLeagueIdAndSeason(id, season){
        return ApiFoot()
            .get(`${apiKey}/lookuptable.php?l=${id}&s=${season}`).data;
    },
    getNext5EventsByTeamId(id){
        return ApiFoot()
            .get(`${apiKey}/eventsnext.php?id=${id}`).data;
    },
    getNext15EventsByLeagueId(id){
        return ApiFoot()
            .get(`${apiKey}/eventsnext.php?id=${id}`).data;
    },
    getPast5EventsByTeamId(id){
        return ApiFoot()
            .get(`${apiKey}/eventslast.php?id=${id}`).data;
    },
    getPast15EventsByLeagueId(id){
        return ApiFoot() 
            .get(`${apiKey}/eventspastleague.php?id=${id}`).data;
    },
    getEventsInRound(id, round, season){
        return ApiFoot() 
            .get(`${apiKey}/eventsround.php?id=${id}&r=${round}&s=${season}`).data;
    },
    getEventsOnDay(day, sport, name){
        sport = makeUrl(sport)
        name = makeUrl(name)
        var params = []
        if(day) params.push(`d=${day}`)
        if(name) params.push(`l=${name}`)
        if(sport) params.push(`s=${sport}`)
        return ApiFoot()
            .get(`${apiKey}/eventsday.php?${params.join('&')}`).data;
    },
    getTvEventsOnDay(day, sport, country,league){
        sport = makeUrl(sport)
        country = makeUrl(country)
        var params = []
        if(day) params.push(`d=${day}`)
        if(country) params.push(`a=${league}`)
        if(sport) params.push(`s=${sport}`)
        return ApiFoot()
            .get(`${apiKey}/eventstv.php?${params.join('&')}`).data;
    },
    getTvEventsByChannel(channel){
        channel = makeUrl(channel)
        return ApiFoot()
            .get(`${apiKey}/eventstv.php?c=${channel}`).data;
    },
    getEventsByLeagueIdAndSeason(id, season){
        return ApiFoot()
            .get(`${apiKey}/eventsseason.php?id=${id}&s=${season}`).data;
    },
    getImage(id){
        return ApiFoot()
            .get(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg`).data;
    },
    getPreviewImage(id){
        return ApiFoot()
            .get(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg/preview`).data;
    },
    getAllEventsByLeagueIdAndSeason(id, season){
        return ApiFoot()
            .get(`${apiKey}/eventsseason.php?id=${id}&s=${season}`).data;
    },
    getSoccerLivescores(){
        return ApiFoot()
            .get(`${apiKey}/latestsoccer.php`).data;
    },
    getLivescoresBySport(sport){
        sport = makeUrl(sport)
        return ApiFoot()
            .get(`https://www.thesportsdb.com/api/v2/json/${apiKey}/livescore.php?s=${sport}`).data;
    },
}

function makeUrl(x){
    if(!x) return x;
    return x.split(" ").join("_");
}