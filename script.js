let currentProject = null;
let currentImage = 0;
const projects = {
	
	default: {
        name: "Добро пожаловать!",
        description: [
			"Выберите проект слева, чтобы посмотреть его описание."
			],
		logo: "images/logo.png",
		news: "Здесь будет новость но проекту"
    },

    rotu: {
		name: "RotU",
		short: "Хоррор-мод",
        description: [
			"RotU — мод для Minecraft, добавляющий новых существ из крипипасты.",
			"Основное внимание уделяется поведению существ, вдохновленному их оригинальными историями. Каждое существо следует своей собственной логике: наблюдает, вмешивается или ждет определенных условий. Некоторые из них не пытаются причинить игроку прямой вред, но их присутствие всегда ощущается.",
			"В настоящее время мод включает 19 различных сущностей."
			],
		logo: "images/rotu.png",
		gallery: ["images/screen/rotu_screen1.png", "images/screen/rotu_screen2.png", "images/screen/rotu_screen3.png", "images/screen/rotu_screen4.png"],
		linkLogo: "images/yt_logo.png",
		linkName: "YouTube",
		link: "https://youtube.com/@dango_rex_mine",
		downLink: "https://www.curseforge.com/minecraft/mc-mods/rotu-ritual-of-the-unknoun-creepypasta",
		news: "Вышла версия 1.2.7!"
    },

    necrocraft: {
        name: "NecroCraft",
        short: "РПГ мод",
        description: [
			"NecroCraft добавляет оружие, магию душ и новое измерение Смерти.",
			"Находиться в разработке.",
			"В настоящее время готовы: оружие, измерение Смерти и система торговли, а также система сбора и возрождения душ",
			"Ведется окончание разработки арены, а также будет начата завершение работы над главным персонажем мода.",
			"Мод совместим с EpicFight"
			],
		logo: "images/necrocraft.png",
		gallery: ["images/screen/necrocraft_screen1.png", "images/screen/necrocraft_screen2.png", "images/screen/necrocraft_screen3.png"],
		linkLogo: "images/yt_logo.png",
		linkName: "YouTube",
		link: "https://youtube.com/@dango_rex_mine",
		downLink: "https://www.curseforge.com/minecraft/mc-mods/necrocraft",
		news: "Еще в разработке!"
    },
	
	blackhunger: {
        name: "The Black Hunger",
        short: "Мод для майнкрафта",
        description: [
			"Мод добавляет паразита, живущего внутри носителя, который может быть как опсным так и полезным.",
			"Находиться в разработке."
			],
		logo: "images/blackhunger.png",
		linkLogo: "images/yt_logo.png",
		linkName: "YouTube",
		link: "https://youtube.com/@dango_rex_mine",
		downLink: "https://www.curseforge.com/minecraft/mc-mods/blackhunger",
		news: "Новый проект!"
    },

    nix: {
        name: "NIX",
        short: "Голосовой помощник",
        description: [
			"NIX — мой голосовой помощник на Python для ПК.",
			"В настоящее время находиться в разработке."
			],
		logo: "images/nix.png",
		linkLogo: "images/gh_logo.png",
		linkName: "GitHub",
		link: "https://github.com/DangoRex/Nix_File",
		downLink: "",
		news: "Еще в разработке!"
    },
	
	yt_dr: {
        name: "Dango_Rex YouTube",
        short: "Ютуб канал",
        description: [
			"Мой канал по игре The Isle.",
			"Здесь я показываю интересные моменты из геймплея."
			],
		logo: "images/yt_dr.png",
		//gallery: "images/screen/yt_dr_screen1.png",
		linkLogo: "images/yt_logo.png",
		linkName: "YouTube",
		link: "https://www.youtube.com/@Dango_Rex",
		news: "Новое видео!"
    },
	
	yt_drm: {
        name: "Dango_Rex Minecraft YouTube",
        short: "Ютуб канал",
        description: [
			"Мой канал по проектам Майнкрафта.",
			"Здесь я показываю процесс разработки моих модов, интересные моменты и обзоры."
			],
		logo: "images/yt_drm.png",
		//gallery: "images/screen/yt_drm_screen1.png",
		linkLogo: "images/yt_logo.png",
		linkName: "YouTube",
		link: "https://youtube.com/@dango_rex_mine",
		news: "Новое видео!"
    }

};

const DISCORD_LINK = "https://discord.gg/YeYfHse5mV";
const DISCORD_LOGO = "images/ds_logo.png";
const button = document.querySelector(".menu-item");				// поиск элемента по его id
const buttons = document.querySelectorAll(".menu-item");
const headerName = document.getElementById("header-project-name");
const headerShort = document.getElementById("header-project-short");
const contentLogo = document.getElementById("content-logo");
const contentName = document.getElementById("content-name");
const galleryWindow = document.getElementById("gallery-window");
const galleryImage = document.getElementById("content-pic1");
const galleryRoll = document.getElementById("gallery-roll");
const numberPic = document.getElementById("number_pic");
const quantityPic = document.getElementById("quantity_pic");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const contentDescription = document.getElementById("content-description1");
const linkBlock = document.getElementById("link-block");
const linkLogo = document.getElementById("link_logo");
const linkDSLogo = document.getElementById("link_ds_logo");
const linkName = document.getElementById("link_name");
const linkButton = document.getElementById("link-block");
const discordButton = document.getElementById("link-discord");
const downloadButton = document.getElementById("down-button");
const news = document.getElementById("news-popup");

function show(element, visible) {						// разрешение показа элемента
    element.style.display = visible ? "flex" : "none";
}

buttons.forEach(function(button){						// кнопка проектов
    button.addEventListener("click", function(){
        loadProject(button.dataset.project);
    });

});

linkButton.addEventListener("click", function(){		// выбираемая проектом кнопка
    if(currentProject && currentProject.link){
        window.open(currentProject.link, "_blank");
    }
});
discordButton.addEventListener("click", function(){		// кнопка дискорда
    window.open(DISCORD_LINK, "_blank");
});

downloadButton.addEventListener("click", function(){	// кнопка скачать
    if(currentProject && currentProject.downLink){
        window.open(currentProject.downLink, "_blank");
    }
});

function updateGallery(){								// обновление галлереи
    galleryImage.src =
        currentProject.gallery[currentImage];
    numberPic.textContent =
        currentImage + 1;
    quantityPic.textContent =
        currentProject.gallery.length;
    show(galleryRoll,
        currentProject.gallery.length > 1);
}

nextButton.addEventListener("click", function(){		// прокрутка галлереи вперед
    currentImage++;
    if(currentImage >= currentProject.gallery.length){
        currentImage = 0;
    }
    updateGallery();
});

backButton.addEventListener("click", function(){		// назад
    currentImage--;
    if(currentImage < 0){
        currentImage =
            currentProject.gallery.length - 1;
    }
    updateGallery();
});

function loadProject(projectId){						// функция загрузки выбраного проекта
	
	currentProject = projects[projectId];				// сохранение текущего проекта
	currentImage = 0;									// начинать показ с первой картинки

    headerName.textContent = currentProject.name || "";		// подстановка текста в нужный блок
    headerShort.textContent = currentProject.short || "";
	contentLogo.src = currentProject.logo;
    contentName.textContent = currentProject.name || "";
    contentDescription.innerHTML = "";
		currentProject.description.forEach(function(text){
			const p = document.createElement("p");
			p.textContent = text;
			contentDescription.appendChild(p);
		});
	linkLogo.src = currentProject.linkLogo;
	linkDSLogo.src = DISCORD_LOGO;
	news.textContent = currentProject.news || "";

    show(galleryWindow, !!currentProject.gallery);		// показ галереи если есть картинки
    if(currentProject.gallery){
        updateGallery();
    }
	
	show(linkBlock, !!currentProject.linkName);			// показ кнопки-ссылки, если она есть
    if(currentProject.linkName){
        linkName.textContent = currentProject.linkName;
    }

}
loadProject("default");									// по умеолчению приветствие
