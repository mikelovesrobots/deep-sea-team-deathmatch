#pragma strict

private var defaultForce : float = 10;
private var defaultRotation : float = 5;

function Update () {
  var vertical : float = Input.GetAxisRaw("Vertical");
  var horizontal : float = Input.GetAxisRaw("Horizontal");
  
  var direction : Vector3 = new Vector3(horizontal, 0, vertical);
  Debug.Log(direction);
  rigidbody.AddRelativeForce(direction * defaultForce);
  rigidbody.AddTorque(new Vector3(0, horizontal, 0) * defaultRotation);
}
