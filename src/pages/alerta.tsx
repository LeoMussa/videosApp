export async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alerta';
    alert.subHeader = 'Favoritos';
    alert.message = 'Deseja adicionar o filme aos favoritos?';
    alert.buttons = [
        {
          text: 'nao',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Add aos favoritos!!')
          }
        }
      ];
  
    document.body.appendChild(alert);
    return alert.present();
  
   
  }