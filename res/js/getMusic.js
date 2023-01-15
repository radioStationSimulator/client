const song_list = document.getElementById("player-songs_availible");

fetch('./music/list.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(title => {
            let song_pane = document.createElement("div");
            song_pane.classList.add("player-song_pane");
            let song_title = document.createElement("div");
            song_title.classList.add("player-song_pane-title");
            let song_title_text = document.createTextNode(title.title);
            let song_artist = document.createElement("div");
            song_artist.classList.add("player-song_pane-artist");
            let song_artist_text = document.createTextNode(title.artist);
            let song_actions = document.createElement("div");
            song_actions.classList.add("player-song_actions");
            let song_actions_play = document.createElement("div");
            song_actions_play.classList.add("player-song_action-play");
            song_actions_play.innerHTML = '<i class="fa-solid fa-play"></i>';
            let song_actions_add_to_queue = document.createElement("div");
            song_actions_add_to_queue.classList.add("player-song_action-add_to_queue");
            song_actions_add_to_queue.innerHTML = '<i class="fa-solid fa-bars"></i>';
            let song_actions_add_at_first = document.createElement("div");
            song_actions_add_at_first.classList.add("player-song_action-add_at_first");
            song_actions_add_at_first.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
            song_actions.appendChild(song_actions_play);
            song_actions.appendChild(song_actions_add_to_queue);
            song_actions.appendChild(song_actions_add_at_first);
            song_title.appendChild(song_title_text);
            song_pane.appendChild(song_title);
            song_artist.appendChild(song_artist_text);
            song_pane.appendChild(song_artist);
            song_pane.appendChild(song_actions);
            song_list.appendChild(song_pane);
        });
    });