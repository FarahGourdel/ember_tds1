import Route from '@ember/routing/route';

export default class SectionsRoute extends Route {
  //Affichage de la liste des sections
  store = this.store();

  //Lien vers 'sections/add' => Ajout d'une section

  //Lien vers 'sections/addProduct' => Ajout d'un produit (pack possible)

  //'sections/delete/:section_id' => Suppression avec confirmation d'une section
    //(affichage du nombre de produits inclus à supprimer)

  //'sections/edit/:section_id' => Gérer une section

    //Affiche la liste des produits

    //Modification possible du nom de la section

    //Lien vers 'sections/edit/:section_id/addProduct' => ajout d'un produit dans la section (pack possible)

    //Lien vers 'sections/edit/:section_id/edit/:product_id' => modification d'un produit de la section

    //'sections/edit/:section_id/delete/:product_id' => suppression avec confirmation d'un produit de la section
}
