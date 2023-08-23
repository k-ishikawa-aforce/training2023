let element = document.getElementById("star");
let blackstar_html = `<span>★</span>`;
let whitestar_html =`<span>☆</span>`;
let br_html = `<br>`;

for (let i = 0; i < 5; i++) {
	element.insertAdjacentHTML("afterbegin", blackstar_html);
}


let star_array = document.getElementById('twostars');
for (let i = 1; i < 6; i++) {
	for (let j = 1; j < 7; j++){
		if (j % 6 === 0) {
			star_array.insertAdjacentHTML("beforeend", br_html);	
	} 	else if ((i + j) % 2 === 0) {
			star_array.insertAdjacentHTML("beforeend", whitestar_html);
	} 	else {
		    star_array.insertAdjacentHTML("beforeend", blackstar_html);
		}
	}
}


let item_name = ['コーヒー', 'お茶', 'オレンジジュース', '水'];
let item_price = [150, 130, 160, 100];

document.getElementById('purchase1').onclick = function change (pay, item_index) {
	pay = document.getElementById('payment1').value;
	item_select = document.getElementById('select');
	item_index = item_select.selectedIndex;
	if (pay - item_price[item_index] < 0) {
		return document.getElementById('output').textContent = 'お金が足りません';
	} else if (pay - item_price[item_index] >= 0) {
		return document.getElementById('output').textContent = item_name[item_index] + "を購入しました。おつりは" + (pay - item_price[item_index]) + "円です";
	}
}

document.getElementById('payment2').onchange = function() {
	pay = document.getElementById('payment2').value;
	if (pay >= 160) {
		coffee.disabled = false;
		tea.disabled = false;
		orange.disabled = false;
		water.disabled = false;
	}else if (pay >= 150){
		coffee.disabled = false;
		tea.disabled = false;
		orange.disabled = true;
		water.disabled = false;		
	}else if (pay >= 130){
		coffee.disable = true;
		tea.disabled = false;
		orange.disabled = true;
		water.disabled = false;
	}else if (pay >= 100) {
		coffee.disabled = true;
		tea.disabled = true;
		orange.disabled = true;
		water.disabled = false;
	}else {
		coffee.disabled = true;
		tea.disabled = true;
		orange.disabled = true;
		water.disabled = true;
	}
}
	

