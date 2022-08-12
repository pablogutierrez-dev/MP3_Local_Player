window.onload = () => {
    const song_img_el = document.getElementById('song__img');
    const song_title_el = document.getElementById('song__title');
    const song_artist_el = document.getElementById('song__artist');
    const song_next_up_el = document.getElementById('song__next-up');

    const play_btn = document.getElementById('play__btn');
    const play_btn_icon = document.getElementById('play__icon');
    const prev_btn = document.getElementById('prev__btn');
    const next_btn = document.getElementById('next__btn');

    const audio_player = document.getElementById('music__player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: 'Falling Away From Me',
            artist: 'KoRn',
            song_path: 'music/Korn - Falling Away from Me (Official HD Video).mp3',
            img_path: 'images/album_1.jpg'
        },
        {
            title: 'Change (In The House Of Flies)',
            artist: 'Deftones',
            song_path: 'music/Deftones - Change (In The House Of Flies) [Official Music Video].mp3',
            img_path: 'images/album_2.jpg'
        },
        {
            title: 'Your Hand in Mine',
            artist: 'Explosions in the Sky',
            song_path: 'music/Explosions in the Sky - Your Hand in Mine.mp3',
            img_path: 'images/album_3.jpg'
        }
    ]

    play_btn.addEventListener('click', TooglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));
    audio_player.addEventListener('ended', () => ChangeSong());


    InitPlayer();


    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }
    
    function UpdatePlayer() {
        let song = songs[current_song_index];
    
        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;
    
        song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;
    
        audio_player.src = song.song_path;
    }

    function TooglePlaySong () {
        if(audio_player.paused){
            audio_player.play();
            play_btn_icon.classList.remove('fa-play')
            play_btn_icon.classList.add('fa-pause')
        } else {
            audio_player.pause();
            play_btn_icon.classList.remove('fa-pause')
            play_btn_icon.classList.add('fa-play')
        }
    }

    function ChangeSong (next = true) {
        if (next) {
            current_song_index ++;
            next_song_index = current_song_index +1;

            if (current_song_index > songs.length -1) {
                current_song_index = 0;
                next_song_index = current_song_index +1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if(current_song_index < 0) {
                current_song_index = songs.length -1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TooglePlaySong();
    }
}



