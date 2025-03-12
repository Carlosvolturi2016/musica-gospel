// Referências aos elementos de áudio e controle
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTrackDisplay = document.getElementById('current-track');
const albumCover = document.getElementById('album-cover');
const volumeSlider = document.getElementById('volume-slider');

// Lista de faixas
const tracks = [
    { src: './musicas/Acende o fogo (Set a fire + Espontâneo) • DROPS.mp3', cover: './fotos/coração em chamas.jpg', title: 'Acende o Fogo' },
    { src: './musicas/AMBIENTE DE GLÓRIA -  Reuel e Dany Silva _ MEVAM MUSIC _ Live Session.mp3', cover: './fotos/ambiente_de_gloria.jpg', title: 'Ambiente da Glória' },
    { src: './musicas/Amigo Fiel (Faithful Friend).mp3', cover: './fotos/amigo_fiel.jpg', title: 'Amigo Fiel' },
    { src: './musicas/Você tem Azeite_ Você tem Óleo_ _ Clamor Pelas Nações.mp3', cover: './fotos/azeite.jpg', title: 'Você tem Azeite_ Você tem Óleo' },
    { src: './musicas/Sua Presença é Real   Pastor Antônio Cirilo   Santa Geração na Lagoinha   Diante do Trono.mp3', cover: './fotos/presença.jpg', title: 'Sua Presença é Real' },
    { src: './musicas/Voz de muitas Águas - Como prometeste.mp3', cover: './fotos/muitas aguas.jpg', title: 'Como Prometeste' },
    { src: './musicas/TE ENCONTREI (Meu Coração Está Ligado ao Teu) - Suzano Selmo.mp3', cover: './fotos/encontro.jpg', title: 'Te Encontrei' },
    { src: './musicas/Marcelo Nascimento - Levanta E Anda.mp3', cover: './fotos/levanta.jpg', title: 'Levanta e Anda' },
    { src: './musicas/(Cover) Basta uma palavra Ft Tuca Nascimento.mp3', cover: './fotos/palavra revelada.jpg', title: 'Basta uma Palavra' },
    { src: './musicas/Mauro Henrique - Herege [www.slider.kz].mp3', cover: './fotos/graça.jpg', title: 'Herege' },
    { src: './musicas/Y2meta.app - Não Há Barreiras (128 kbps).mp3', cover: './fotos/em obras.jpg', title: 'Não há Barreiras' },
    { src: './musicas/Te Amar.mp3', cover: './fotos/20.jpg', title: 'Te amar' },
    { src: './musicas/Triunfo.mp3', cover: './fotos/22.jpg', title: 'Triunfar' },
    { src: './musicas/Mauro Henrique - Aonde Está Deus [www.slider.kz].mp3', cover: './fotos/desperta.jpg', title: 'Aonde está Deus' },
    { src: './musicas/Y2meta.app - Restitui (Ao Vivo) (128 kbps).mp3', cover: './fotos/tempo.jpg', title: 'Restitui' },
    { src: './musicas/Nani Azevedo - Não Temas - DVD Bendito Serei.mp3', cover: './fotos/capa.2.jpg', title: 'Não Temas' },
    { src: './musicas/Visitação.mp3', cover: './fotos/aba.jpg', title: 'Visitação' },
    { src: './musicas/Y2meta.app - Nunca Pare de Lutar (128 kbps).mp3', cover: './fotos/guerra.jpg', title: 'Nunca pare de Lutar' },
    { src: './musicas/Gerson Rufino I Eu te escolhi _DVD RECONSTRUÇÃO_ [Clipe Oficial].mp3', cover: './fotos/10.jpg', title: 'Eu te Escolhi' },
    { src: './musicas/X2Download.app - Calma - Álvaro Tito [COVER] Amanda Wanessa (128 kbps).mp3', cover: './fotos/4.jpg', title: 'Calma' },
    { src: './musicas/Eu pertenço ao Senhor - Templo Soul.mp3', cover: './fotos/templo.jpg', title: 'Eu pertenço ao Senhor - Templo Soul' },
    { src: './musicas/X2Download.app - Glória em Glória - Nic&Rachel Billman [Som do Reino - Vol 1] (128 kbps).mp3', cover: './fotos/caminho.jpg', title: 'De glória em glória' },
    { src: './musicas/Testemunho Pessoal do Pr. Antônio Cirilo.mp3', cover: './fotos/leão e cruz.jpg', title: 'Testemunho pessoal' },
    { src: './musicas/ESTÁS AQUI _ Suzano Selmo.mp3', cover: './fotos/passos.jpg', title: 'Estás Aqui' },
    { src: './musicas/14 O BOM SAMARITANO.mp3', cover: './fotos/ungindo.jpg', title: 'O bom samaritano' },
    { src: './musicas/10 Ousado Amor.mp3', cover: './fotos/amor.jpg', title: 'Ousado amor' },
    { src: './musicas/Quero As Aguas.mp3', cover: './fotos/Quero As Aguas.jpg', title: 'Quero As Aguas' },
    { src: './musicas/O Fogo Arderá.mp3', cover: './fotos/O Fogo Arderá.jpg', title: 'O Fogo Arderá' },
    { src: './musicas/Melhor Lugar.mp3', cover: './fotos/melhor lugar.jpg', title: 'Melhor Lugar' },
    { src: './musicas/É Ele (Ao Vivo) • DROPS.mp3', cover: './fotos/ele.jpg', title: 'É Ele' },
    { src: './musicas/Be One Music - Rei Do Meu Coração.mp3', cover: './fotos/rei.jpg', title: 'Rei do meu Coração' },
    { src: './musicas/Templo Soul ｜ Emaús.mp3', cover: './fotos/emaus.jpg', title: 'Templo Soul ｜ Emaús' },
    { src: './musicas/Templo Soul ｜ Chega (Volume III).mp3', cover: './fotos/Chega.jpg', title: 'Templo Soul ｜ Chega (Volume III)' },
    { src: './musicas/Rugido Do Leão.mp3', cover: './fotos/Rugido Do Leão.jpg', title: 'Rugido Do Leão' },
    { src: './musicas/Templo Soul ｜ Não Pare.mp3', cover: './fotos/templo.jpg', title: 'Não Pare' },
    { src: './musicas/Templo Soul ｜ Pista do Céu.mp3', cover: './fotos/templo.jpg', title: 'Templo Soul ｜ Pista do Céu' },
    { src: './musicas/Templo Soul ｜ Tô Legal.mp3', cover: './fotos/templo.jpg', title: 'Templo Soul ｜ Tô Legal' },
    { src: './musicas/Templo Soul ｜ Se Segura.mp3', cover: './fotos/templo.jpg', title: 'Templo Soul ｜ Se Segura' },
    { src: './musicas/Templo Soul feat Ton Carfi & Pregador Luo ).mp3', cover: './fotos/templo.jpg', title: 'Como DEUS é bom' },
    { src: './musicas/Deus vai te restituir.mp3', cover: './fotos/trigo.jpg', title: 'Pregação: Restituição' },
    { src: './musicas/Paulo Neto _ Simplesmente Sobrenatural.mp3', cover: './fotos/mão.jpg', title: 'Paulo Neto _ Simplesmente Sobrenatural' },
    { src: './musicas/TESOURO + O TEU OLHAR ME CONQUISTOU.mp3', cover: './fotos/olhar.jpg', title: 'TESOURO + O TEU OLHAR ME CONQUISTOU' },
    { src: './musicas/TE EXALTAMOS + EU QUERO MAIS - Suzano Selmo (Ao Vivo).mp3', cover: './fotos/trombeta.jpg', title: 'TE EXALTAMOS + EU QUERO MAIS - Suzano Selmo (Ao Vivo)' },
    { src: './musicas/Som do Caminho - Eu Voltei.mp3', cover: './fotos/filho.jpg', title: 'Som do Caminho - Eu Voltei' },
    { src: './musicas/SANTO [Espontâneo] - Suzano Selmo (Ao Vivo).mp3', cover: './fotos/cpeu.jpg', title: 'SANTO [Espontâneo] - Suzano Selmo (Ao Vivo)' },
    { src: './musicas/Fernandinho _ Moisés (Álbum Único - Live).mp3', cover: './fotos/moises.jpg', title: 'Fernandinho _ Moisés (Álbum Único - Live)' },
    { src: './musicas/Fernandinho _ Eis que Estou à Porta (Álbum Único - Live).mp3', cover: './fotos/porta.jpg', title: 'Eis que Estou à Porta' },
    { src: './musicas/Adoração espontânea- Onde estão os filhos_.mp3', cover: './fotos/noiva.jpg', title: 'Onde estão os Filhos' },
    { src: './musicas/DEUS DE MILAGRES _ THIAGO GODOI & MATTOS NASCIMENTO.mp3', cover: './fotos/coração.jpg', title: 'DEUS DE MILAGRES' },
    { src: './musicas/Segue a Cristo.mp3', cover: './fotos/SEGUIR.jpg', title: 'Segue a Cristo' },
    { src: './musicas/Ressuscita (Ao Vivo).mp3', cover: './fotos/vale.jpg', title: 'Ressuscita (Ao Vivo)' },
    { src: './musicas/Autoridade e Poder   Marcos Góes.mp3', cover: './fotos/loc.gif', title: 'Autoridade e Poder' },
    { src: './musicas/MILAGRES SÃO REAIS.mp3', cover: './fotos/27.jpg', title: 'MILAGRES SÃO REAIS' },
    { src: './musicas/tu és soberano.mp3', cover: './fotos/soberano.jpg', title: 'Tu és soberano' },
    { src: './musicas/Dia de Pentecoste (Ao Vivo).mp3', cover: './fotos/Espirito Santo.jpg', title: 'Dia de Pentecoste (Ao Vivo)' },
    { src: './musicas/Quando Jesus Estendeu Sua Mãos.mp3', cover: './fotos/segura.jpg', title: 'Quando Jesus Estendeu Sua Mãos' },
    { src: './musicas/Refúgio e Fortaleza.mp3', cover: './fotos/refugio.jpg', title: 'Refúgio e Fortaleza' },
    { src: './musicas/Hoje Sou Livre.mp3', cover: './fotos/livre.jpg', title: 'Hoje Sou Livre' },
    { src: './musicas/Mais Perto.mp3', cover: './fotos/perto.jpg', title: 'Mais Perto' },
    { src: './musicas/Há Poder no Sangue de Jesus.mp3', cover: './fotos/fazei em memória de mim.jpg', title: 'Há Poder no Sangue de Jesus' },
    { src: './musicas/Confissão (Ao Vivo).mp3', cover: './fotos/confissão.jpg', title: 'Confissão (Ao Vivo)' },
    { src: './musicas/Canção de Isaque.mp3', cover: './fotos/altar.jpg', title: 'Canção de Isaque' },
    { src: './musicas/Beija-me Com Tua Glória (Ao Vivo).mp3', cover: './fotos/beija.jpg', title: 'Beija-me Com Tua Glória' },
    { src: './musicas/Vem Minha Noiva (Ao Vivo).mp3', cover: './fotos/noiva 1.jpg', title: 'Vem Minha Noiva (Ao Vivo)' },
    { src: './musicas/Atrai Meu Coração.mp3', cover: './fotos/corazon.jpg', title: 'Atrai Meu Coração' },
    { src: './musicas/GIDEL E CAROL Louvor Nas tábuas do meu coração.mp3', cover: './fotos/dentro.jpg', title: 'Louvor Nas tábuas do meu coração' },
    { src: './musicas/Pr Gidel - Faz outra vez como na primeira vez.mp3', cover: './fotos/denovo.jpg', title: 'Faz outra vez como na primeira vez' },
    { src: './musicas/Mostra-Me Tua Glória.mp3', cover: './fotos/orla.jpg', title: 'Mostra-Me Tua Glória' },
    { src: './musicas/Fogo de Deus.mp3', cover: './fotos/arder.jpg', title: 'Fogo de Deus' },
    { src: './musicas/A Hora de Partir.mp3', cover: './fotos/tempo.jpg', title: 'A Hora de Partir' },
    { src: './musicas/Alma Cansada.mp3', cover: './fotos/cansada.jpg', title: 'Alma Cansada' },
    { src: './musicas/Bem Querer - Marcos Góes.mp3', cover: './fotos/bem.jpg', title: 'Bem Querer - Marcos Góes' },
    { src: './musicas/Cetro De Justiça.mp3', cover: './fotos/cetro.jpg', title: 'Cetro De Justiça' },
    { src: './musicas/És a estrela da manhã.mp3', cover: './fotos/sol.jpg', title: 'És a estrela da manhã' },
    { src: './musicas/Espírito Santo.mp3', cover: './fotos/santo.jpg', title: 'Espírito Santo' },
    { src: './musicas/O Vento Sopra.mp3', cover: './fotos/Cordeiro e Leão.jpg', title: 'O Vento Sopra' },
    { src: './musicas/Quem pode livrar como o Senhor.mp3', cover: './fotos/livra.jpg', title: 'Quem pode livrar como o Senhor' },
    { src: './musicas/Só Tua Glória Me Satisfaz.mp3', cover: './fotos/gloria.jpg', title: 'Só Tua Glória Me Satisfaz' },
    { src: './musicas/Pr Gidel lannes, Meu Pai, Ministério Filho do Seu Amor.mp3', cover: './fotos/adoção.jpg', title: 'Filho do Seu Amor' },
    { src: './musicas/Faz Resplandecer.mp3', cover: './fotos/resplandecer.jpg', title: 'Faz Resplandecer' },
    { src: './musicas/Formoso Tu És.mp3', cover: './fotos/casa na rocha.jpg', title: 'Formoso Tu És' },
    { src: './musicas/Senhor, Formoso És.mp3', cover: './fotos/bem.jpg', title: 'Senhor, Formoso És' },
    { src: './musicas/Sarah Beatriz - O maior vilão sou eu (Ao Vivo).mp3', cover: './fotos/SARAH-BEATRIZ.jpg', title: 'O maior vilão sou eu' },
    { src: './musicas/Wester Reis- Pai nosso.mp3', cover: './fotos/pai.jpg', title: 'Pai nosso' },
    { src: './musicas/Abra os Olhos do Meu Coração.mp3', cover: './fotos/coraz.jpg', title: 'Abra os Olhos do Meu Coração' },
    { src: './musicas/Palavras tem poder _ Silmar Coelho (128 kbps).mp3', cover: './fotos/Silmar-Coelho.jpg', title: 'Palavras tem poder _ Silmar Coelho' },
    { src: './musicas/ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS - PR SUZANO SELMO (128 kbps).mp3', cover: './fotos/orar.jpg', title: 'ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS' },
    { src: './musicas/O Amigo Lázaro -  Pedro Neves - Música de Jadiel Barbosa (128 kbps).mp3', cover: './fotos/lazaro.jpg', title: 'O Amigo Lázaro' },
    { src: './musicas/Quatro Por Um - Cinco Pães E Dois Peixinhos  (128 kbps).mp3', cover: './fotos/peixe.jpg', title: 'Cinco Pães E Dois Peixinhos' },
    { src: './musicas/Samuel Messias - Eu Não Perdi o Controle.mp3', cover: './fotos/controle.jpg', title: 'Eu Não Perdi o Controle' },
    { src: './musicas/Um Chamado (128 kbps).mp3', cover: './fotos/chamado.jpg', title: 'Um Chamado' },
    { src: './musicas/Valesca Mayssa  Árvore Cortada.mp3', cover: './fotos/arvore.jpg', title: 'Árvore Cortada' },
    { src: './musicas/Junior - Soldado Ferido.mp3', cover: './fotos/soldado.jpg', title: 'Soldado Ferido' },
    { src: './musicas/Renascer Praise - 1000 Graus.mp3', cover: './fotos/renacer.jpg', title: '1000 Graus' },
    { src: './musicas/Leandro Borges e Clayton Queiroz - O Silêncio de Deus.mp3', cover: './fotos/silencio.jpg', title: 'O Silêncio de Deus' },
    { src: './musicas/Eli Soares - Pela Fé.mp3', cover: './fotos/fe.jpg', title: 'Pela Fé' },
    { src: './musicas/Canção e Louvor - Eu Sou Mistério.mp3', cover: './fotos/canção.jpg', title: 'Eu Sou Mistério' },
    { src: './musicas/Eli Soares - Vem Com Josué Lutar Em Jericó.mp3', cover: './fotos/jerico.jpg', title: 'Vem Com Josué Lutar Em Jericó' },
    { src: './musicas/Mattos Nascimento - Eu Profetizo.mp3', cover: './fotos/profetizo.jpg', title: 'Eu Profetizo' },
    { src: './musicas/Mattos Nascimento - Geração de Davi.mp3', cover: './fotos/liberdade.jpg', title: 'Geração de Davi' },
    { src: './musicas/Mattos Nascimento - Quando Jesus Estendeu Sua Mão.mp3', cover: './fotos/mao.jpg', title: 'Quando Jesus Estendeu Sua Mão' },
    { src: './musicas/Mattos Nascimento - Alma Abatida.mp3', cover: './fotos/abatida.jpg', title: 'Alma Abatida' },
    { src: './musicas/Colossenses e Suas Linhas de Amor.mp3', cover: './fotos/linhas.jpg', title: 'Colossenses e Suas Linhas de Amor' },
    { src: './musicas/Tu es Bom - Ao Vivo.mp3', cover: './fotos/bom.jpg', title: 'Tu es Bom' },
    { src: './musicas/Que Se Abram Os Céus - Ao Vivo.mp3', cover: './fotos/abre o ceu.jpg', title: 'Que Se Abram Os Céus' },
    { src: './musicas/fases importantes.mp3', cover: './fotos/linguas.jpg', title: 'Fases importantes na oração em línguas' },
    { src: './musicas/Dagom ou Jeová pregação.mp3', cover: './fotos/ab.avif', title: 'Dagom ou Jeová pregação' },
    { src: './musicas/Pastor Geziel Apocalipse.mp3', cover: './fotos/geziel.jpg', title: 'Apocalipse pregação' },
    { src: './musicas/Geziel gomes Óleo Sobre a cabeça.mp3', cover: './fotos/pastor geziel gomes.jpg', title: 'Óleo Sobre a cabeça pregação' },
    { src: './musicas/04 Há uma Saída.mp3', cover: './fotos/Shirley.avif', title: 'Há uma Saída' },
    { src: './musicas/02 Fale com Jesus.mp3', cover: './fotos/fale.jpg', title: 'Fale com Jesus '},
    { src: './musicas/01 Estou Contigo.mp3', cover: './fotos/contigo.jpg', title: 'Estou Contigo' },
    { src: './musicas/Adoração Espontânea 1.mp3', cover: './fotos/adorar.jpg', title: 'Adoração Espontânea 1' },
    { src: './musicas/08-Quando Desce o Espírito Santo.mp3', cover: './fotos/espirito.jpg', title: 'Quando Desce o Espírito Santo' },
    { src: './musicas/05 - Nos braços do Pai.mp3', cover: './fotos/braços.jpg', title: 'Nos braços do Pai' },
    { src: './musicas/04 - Invoca-me.mp3', cover: './fotos/orando.jpg', title: 'Invoca-me' },
    { src: './musicas/03 - Apaixonado por Ti.mp3', cover: './fotos/apai.jpg', title: 'Apaixonado por Ti' },
    { src: './musicas/06 - Me Esvaziar.mp3', cover: './fotos/esvaziar.jpg', title: 'Me Esvaziar' },
    { src: './musicas/Pr Abilio Santana - Aviva a Tua Obra Ó Senhor! - Gideões! 2017.mp3', cover: './fotos/abilio.jpg', title: ' Aviva a Tua Obra Ó Senhor' },
    { src: './musicas/ANJO, PÃO, BRASA E BOTIJA DE ÁGUA - PR ABILIO SANTANA (COMPLETO).mp3', cover: './fotos/1.jpg', title: ' ANJO, PÃO, BRASA E BOTIJA DE ÁGUA Pregação' },
    { src: './musicas/CAMILA BARROS _ O TEMPO ESTÁ ACABANDO _ LAGOINHA ALPHAVILLE.mp3', cover: './fotos/camila.jpg', title: ' O TEMPO ESTÁ ACABANDO' },
    { src: './musicas/Vou chegar mais longe _ Silmar Coelho.mp3', cover: './fotos/silmar1.jpg', title: ' Vou chegar mais longe _ Silmar Coelho' },
    { src: './musicas/Coragem para viver - Pr. Silmar Coelho.mp3', cover: './fotos/silmar2.jpg', title: ' Coragem para viver - Pr. Silmar Coelho ' },
    { src: './musicas/Pr.  Silmar Coelho - Não desista.mp3', cover: './fotos/silmar3.webp', title: ' Não desista _ Silmar Coelho' },
    { src: 'musicas/DE ONDE VEIO A MADEIRA DA CRUZ.mp3', cover: 'fotos/adelry.jpg', title: 'DE ONDE VEIO A MADEIRA DA CRUZ' },







];

let currentTrackIndex = 0;
let isPlaying = false;

// Função para carregar uma nova faixa
function loadTrack(index) {
    const track = tracks[index];
    if (track) {
        audioPlayer.src = track.src;
        albumCover.src = track.cover;
        currentTrackDisplay.textContent = `Tocando: ${track.title}`;
        audioPlayer.load(); // Carrega a nova faixa
        if (isPlaying) {
            audioPlayer.play();
        }
    }
}

// Função para tocar/pausar a faixa atual
function playPauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Função para avançar para a próxima faixa
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Função para voltar para a faixa anterior
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Controle de volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Eventos de clique para os botões de controle
playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);
volumeSlider.addEventListener('input', adjustVolume);

// Evento para tocar a próxima faixa quando a atual terminar
audioPlayer.addEventListener('ended', nextTrack);

// Carrega a primeira música ao iniciar a página
window.addEventListener('load', () => {
    loadTrack(currentTrackIndex);
});