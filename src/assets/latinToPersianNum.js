export default function getPersianNumbers(str)
{
   
        return ("" + str).replace(/[0-9]/g, function(t) {
            return "٠١٢٣٤٥٦٧٨٩".substr(+t, 1);
        })
}