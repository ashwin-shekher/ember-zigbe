import Model from '@ember-data/model';
import attr from 'ember-data/attr';


export default class AppItemModel extends Model {

    @attr name;
    @attr description;
    @attr author_name;
    @attr download_count;
    @attr thumbnail;    
    @attr tag;
    @attr price;
    @attr downloadLink;
    @attr rating;

}
