function once(func) {
  let done = false;
  return function (...args) {
    if (done) {
      return;
    }

    done = true;
    func(...args);
  };
}

function bill(amount) {
  console.log(`결제 되었습니다. 금액: ${amount}`);
}

// bill("100만원");
// bill("100만원");
// bill("100만원");

const billOnce = once(bill);
billOnce("100만원");
billOnce("100만원");
billOnce("100만원");
billOnce("100만원");
billOnce("100만원");
billOnce("100만원");
