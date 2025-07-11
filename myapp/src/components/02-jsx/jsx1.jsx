 //KURAL 1 :JSX icinde mutlaka  sadece bir tane root element olmalidir.
 //KURAL 2 :Component isimleri PASCAL case olmali..kucuk harflew yazilmali
 //KURAL 3 : JSX icindeki elementlerin attribute'lari camelCase olmali
 //KURAL 4 : JSX icinde  javascript icin anlamli olan krlimeler kullanilmamalidir.
 // class,for vb.. kelimeler reservedifadelerdir.



  export const Jsx1 = () =>{

    return(
        <div>
        <div className="form-group">
            <label htmlFor = "name">JSX1 </label>
            <input type="text" id ="name" />
            </div>
            <p>Required</p>
        </div>
    );
 };