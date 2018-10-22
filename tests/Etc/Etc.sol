pragma solidity ^0.4.24;

// line comment

/*
	Block comment
*/

contract Contract {
  struct StructWithFunctionTypes {
    function (uint, uint) returns(bool)a;
    function(bytes32, bytes32)   internal view[]  b;
    function  (bytes32, bytes32)internal[]   c;
  }

  modifier modifierWithoutParams() {
    require(msg.sender != address(0));
    _;
  }

  modifier modifierWithParams(address x) {
    require(msg.sender != x);
    _;
  }

  function forWithoutBlock() {
    uint i;
    uint sum;
    for ( i = 0; i < 10; i++ ) sum   +=  i;
  }
}
