public var playerPrefab : Transform;
public var gunPrefab : Transform;

function OnNetworkLoadedLevel()
{
  Debug.Log("BoatSpawnPrefab#OnNetworkLoadedLevel");
  var player : Transform = Spawn(playerPrefab, null);
  var times : int = Random.Range(50,100);
  for(var i : int = 0; i < times; i++) {
    Spawn(gunPrefab, player);
  }
}

function Spawn(prefab : Transform, parent : Transform) : Transform{
  // Randomize starting location
  var pos : Vector3;
  pos.x = 20*Random.value;
  pos.y = 0;
  pos.z = 20*Random.value;
  var prefabInstance : Transform = Network.Instantiate(prefab, pos, transform.rotation, 0);

  if (parent) {
    var joint : Joint = prefabInstance.gameObject.AddComponent(SpringJoint);
    joint.connectedBody = parent.rigidbody;
  }

  return prefabInstance;
}

function OnPlayerDisconnected (player : NetworkPlayer)
{
  Debug.Log("Server destroying player");
  Network.RemoveRPCs(player, 0);
  Network.DestroyPlayerObjects(player);
}

