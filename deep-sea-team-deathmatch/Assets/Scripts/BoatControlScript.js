#pragma strict

private var defaultForce : float = 10;
private var defaultRotation : float = 5;

function Update () {
  var vertical : float = Input.GetAxisRaw("Vertical");
  var horizontal : float = Input.GetAxisRaw("Horizontal");
  var push : Vector3 = new Vector3(0, 0, vertical);
  var turn : Vector3 = new Vector3(0, horizontal, 0);

  rigidbody.AddRelativeForce(push * defaultForce);
  rigidbody.AddTorque(turn * defaultRotation);
}
