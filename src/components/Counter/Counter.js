// Import useState dari React (desctructing).
import { useState } from "react";

function Counter() {
  /**
   * Membuat state menggunakan useState dan set nilai awal 0
   * useState mengembalikan 2 nilai:
   * - Berisi current value: result.
   * - Berisi fungsi untuk mengupdate result: setResult.
   * Melakukan destructing array dari hasil useState
   */
  const [hasil, setHasil] = useState(0);

  function tambah() {
    /**
     * Update state result menggunakan fungsi setResult
     */
    setHasil(hasil + 1);
  }
  

  return (
    <div>
      <p>hasil: {hasil} </p>
      <button onClick={tambah}>Add</button>
    </div>
  );
}

export default Counter;
