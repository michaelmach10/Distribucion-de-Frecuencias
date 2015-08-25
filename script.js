function inicio() {
	
	//funcion para el boton nueva_fila
	function addRow() {
		var rows = document.getElementById('rows');
		rows.innerHTML += '<tr class="row"><td><input class="x" type="number" /></td><td><input class="fa" type="number" /></td><td class="fr"></td><td class="pc"></td><td class="faa"></td></tr>';
	}
	
	//funcion para el boton calcular
	function calc(){
		
		//funcion para calcular FA
		function calc_fa() {
			var sum_fa = 0;
			for(i=0;i<fa.length;i++) {
				sum_fa = sum_fa + Number(fa[i].value);
			}
			tfa.innerHTML = sum_fa;
		}
		
		//funcion para calcular FR
		function calc_fr() {
			for(i=0;i<fa.length;i++) {
				fr[i].innerHTML = Number(fa[i].value)  / tfa.innerHTML;
			}
			var sum_fr = 0;
			for(i=0;i<fr.length;i++) {
				sum_fr = sum_fr + Number(fr[i].innerHTML);
			}
			tfr.innerHTML = sum_fr;
		}
		
		//funcion para calcular porcentajes
		function calc_pc() {
			for(i=0;i<fr.length;i++) {
				pc[i].innerHTML = Number(fr[i].innerHTML)  * 100;
			}
			var sum_pc = 0;
			for(i=0;i<pc.length;i++) {
				sum_pc = sum_pc + Number(pc[i].innerHTML);
			}
			tpc.innerHTML = sum_pc + '%';
			//agregar el simbolo %
			for(i=0;i<pc.length;i++) {
				pc[i].innerHTML += '%';
			}			
		}
		
		function calc_faa() {
			var sum_faa = 0;
			for(i=0;i<fa.length;i++) {
				sum_faa = sum_faa + Number(fa[i].value);
				faa[i].innerHTML = sum_faa;
			}
		}
		
		var fa = document.getElementsByClassName('fa');
		var fr = document.getElementsByClassName('fr');
		var pc = document.getElementsByClassName('pc');
		var faa = document.getElementsByClassName('faa');
		var tfa = document.getElementById('fa');
		var tfr = document.getElementById('fr');
		var tpc = document.getElementById('pc');
		calc_fa();
		calc_fr();
		calc_pc();
		calc_faa();
	}
	
	var new_row = document.getElementById('new_row');
	new_row.addEventListener('click', addRow);
	var exe = document.getElementById('exe');
	exe.addEventListener('click', calc);
}

window.addEventListener('load', inicio);