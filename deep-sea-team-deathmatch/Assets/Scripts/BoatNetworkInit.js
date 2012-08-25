#pragma strict

function OnNetworkInstantiate (msg : NetworkMessageInfo) {
  // This is our own player
  if (networkView.isMine) {
    Camera.main.GetComponent(SmoothFollow).target = transform;
    GetComponent(NetworkRigidbody).enabled = false;
  } else {
    // This is just some remote controlled player, don't execute direct
    // user input on this
    name += "Remote";
    GetComponent(BoatControlScript).enabled = false;
    GetComponent(NetworkRigidbody).enabled = true;
    //gameObject.AddComponent(NetworkSerializationRemote);
  }
}
