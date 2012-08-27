#pragma strict

function OnNetworkInstantiate (msg : NetworkMessageInfo) {
  // This is our own player
  if (networkView.isMine) {
    Camera.main.GetComponent(SmoothFollow).target = transform;
  } else {
    GetComponent(BoatControlScript).enabled = false;
  }
}
