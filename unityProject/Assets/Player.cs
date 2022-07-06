using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    Rigidbody2D player_rb;
    float horizontal;

    [Header("Player Speed")]
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        player_rb = GetComponent<Rigidbody2D>();
       

    }

    private void FixedUpdate()
    {
        player_rb.velocity = new Vector2(horizontal * speed, player_rb.velocity.y);
    }

    // Update is called once per frame
    void Update()
    {
        horizontal = Input.GetAxis("Horizontal");
       
    }
}
