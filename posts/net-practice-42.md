---
title: "42 NetPractice: A Simple Guide to Network Basics"
category: "42 Core Projects"
date: 2025-07-30
post_image: "/main-img2.webp"
---

# 42 NetPractice: A Simple Guide to Network Basics

NetPractice is one of the most practical projects in 42 School that teaches you real networking skills. Instead of just coding, you'll learn how computers actually talk to each other over networks - skills that every developer, system administrator, and IT professional needs to know.

## What is NetPractice?

NetPractice is a web-based tool with 10 levels that present network diagrams with missing information. Your job is to fill in the blanks to make the network work correctly. Think of it like solving puzzles, but these puzzles teach you how the internet actually works.

Each level shows you a visual network with computers, routers, and connections. Some information is missing (like IP addresses), and you need to figure out what goes where so all the devices can communicate with each other.

## Basic Network Components You'll See

Before diving into NetPractice, let's understand the basic building blocks you'll encounter:

### What is an IP Address?

An IP address is like a postal address for computers. Just like your house has an address so mail can find you, every device on a network needs an IP address so data can find it.

**Example**: `192.168.1.10`

IP addresses have two parts:
- **Network part**: Identifies which network the device is on
- **Host part**: Identifies the specific device on that network

### What is a Subnet Mask?

A subnet mask tells the computer which part of the IP address is the network and which part identifies the specific device. It's written like an IP address but uses only certain numbers.

**Common subnet masks**:
- `255.255.255.0` (or `/24`) - Allows 254 devices on the network
- `255.255.0.0` (or `/16`) - Allows 65,534 devices on the network
- `255.0.0.0` (or `/8`) - Allows 16,777,214 devices on the network

### What is a Router?

A router is like a traffic director for networks. It connects different networks together and decides where to send data packets. In NetPractice, routers appear as boxes with multiple connections.

**What routers do**:
- Connect different networks
- Forward data between networks
- Make decisions about the best path for data
- Have routing tables that tell them where to send traffic

### What is a Switch?

A switch connects devices within the same network. Think of it like a hub that allows multiple devices to talk to each other on the same network. In NetPractice, you'll see switches connecting multiple computers.

**Difference from routers**:
- Switches work within one network
- Routers connect different networks
- Switches are "smarter hubs"

### What is NAT (Network Address Translation)?

NAT allows multiple devices to share one public IP address. It's like having a receptionist at a company - the outside world sees one phone number, but the receptionist forwards calls to the right person inside.

**Why NAT is important**:
- Saves IP addresses (we're running out!)
- Provides security by hiding internal network structure
- Allows home networks to work with one internet connection

### What is DHCP (Dynamic Host Configuration Protocol)?

DHCP automatically assigns IP addresses to devices when they connect to a network. Instead of manually configuring every device, DHCP does it automatically.

**What DHCP provides**:
- IP address
- Subnet mask
- Default gateway (router address)
- DNS server addresses

## Understanding Subnetting (The Most Important Concept)

Subnetting is dividing a large network into smaller pieces. It's like dividing a large building into different floors and rooms.

### CIDR Notation Made Simple

Instead of writing `255.255.255.0`, we can write `/24`. This number tells us how many bits are used for the network part.

**Common CIDR examples**:
- `/24` = 256 total addresses, 254 usable (one small network)
- `/16` = 65,536 total addresses (medium network)
- `/8` = 16,777,216 total addresses (huge network)

### Quick Subnetting Tips

**For `/24` networks** (most common in NetPractice):
- Network: `192.168.1.0`
- First usable IP: `192.168.1.1`
- Last usable IP: `192.168.1.254`
- Broadcast: `192.168.1.255`

**For `/30` networks** (common for router-to-router connections):
- Only 2 usable IP addresses
- Perfect for connecting routers
- Example: `10.0.0.0/30` gives you `10.0.0.1` and `10.0.0.2`

## NetPractice Level Breakdown

### Levels 1-3: Basic Connections
**What you'll learn**:
- Setting IP addresses on computers
- Understanding subnet masks
- Making two computers talk to each other

**Common mistakes**:
- Using the network address (ending in .0) for a computer
- Using the broadcast address (ending in .255) for a computer
- Mismatching subnet masks

### Levels 4-6: Adding Routers
**What you'll learn**:
- How routers connect networks
- Setting up routing tables
- Understanding default gateways

**Key concepts**:
- Default gateway = the router's IP address
- Routing table tells the router where to send traffic
- Each interface on a router needs a different IP address

### Levels 7-8: Multiple Networks
**What you'll learn**:
- Managing several networks at once
- Complex routing scenarios
- Avoiding IP address conflicts

**Tips**:
- Draw out the networks on paper
- Check that each network has unique address ranges
- Make sure all devices have a way to reach their destinations

### Levels 9-10: Advanced Scenarios
**What you'll learn**:
- Everything together in complex topologies
- Efficient IP address allocation
- Real-world network design

## Essential Networking Concepts for NetPractice

### Private vs Public IP Addresses

**Private IP ranges** (used in local networks):
- `192.168.0.0` to `192.168.255.255`
- `172.16.0.0` to `172.31.255.255`
- `10.0.0.0` to `10.255.255.255`

**Public IP addresses**: Everything else (used on the internet)

### Default Gateway

The default gateway is the router that connects your local network to other networks (like the internet). Every device needs to know its default gateway to communicate outside its local network.

### Routing Tables

A routing table is like a GPS for routers. It contains:
- **Destination**: Where the traffic is going
- **Next hop**: Where to send it next
- **Interface**: Which router port to use

**Example routing table entry**:
- Destination: `192.168.2.0/24`
- Next hop: `10.0.0.2`
- Meaning: "To reach network 192.168.2.0, send packets to 10.0.0.2"

### Loopback Address

`127.0.0.1` (localhost) is a special address that always refers to the current device. It's used for testing and internal communication.

## Common NetPractice Mistakes and How to Fix Them

### Mistake 1: Overlapping Networks
**Problem**: Two networks using the same IP range
**Solution**: Make sure each network has a unique address range

**Example of overlap**:
- Network A: `192.168.1.0/24`
- Network B: `192.168.1.0/24` ❌

**Fixed**:
- Network A: `192.168.1.0/24`
- Network B: `192.168.2.0/24` ✅

### Mistake 2: Wrong Subnet Mask
**Problem**: Devices on the same network have different subnet masks
**Solution**: All devices on the same network segment must have the same subnet mask

### Mistake 3: Missing Routes
**Problem**: Router doesn't know where to send traffic
**Solution**: Add routing table entries for all destination networks

### Mistake 4: Using Network or Broadcast Addresses
**Problem**: Assigning .0 or .255 addresses to devices
**Solution**: Use addresses in between (.1 to .254 for /24 networks)

## Practical Tips for Success

### Step-by-Step Approach
1. **Identify all networks** in the diagram
2. **Assign IP ranges** to each network (make sure they don't overlap)
3. **Configure device IPs** within their network ranges
4. **Set up routing** so networks can talk to each other
5. **Test your solution** by tracing packet paths

### Quick Calculation Tricks

**For /24 networks**:
- Always 254 usable addresses
- Network ends in .0, broadcast ends in .255

**For /30 networks**:
- Always 2 usable addresses
- Perfect for router connections
- Pattern: .0, .1, .2, .3 (use .1 and .2)

**For /25 networks**:
- 126 usable addresses
- Two /25 networks fit in one /24 range

### Drawing Networks

Draw your networks on paper! This helps you:
- Visualize the connections
- Avoid IP conflicts
- Plan your addressing scheme
- Understand traffic flow

## Real-World Applications

The skills you learn in NetPractice are used daily by:

### System Administrators
- Setting up servers with correct IP addresses
- Configuring network interfaces on Linux systems
- Troubleshooting connectivity issues

### DevOps Engineers
- Designing cloud network architectures (AWS VPC, Azure VNet)
- Setting up container networking (Docker, Kubernetes)
- Managing infrastructure as code

### Web Developers
- Understanding how web requests travel through networks
- Debugging API connectivity issues
- Setting up development environments

## Beyond NetPractice: What's Next?

Once you master NetPractice, you'll be ready for:

### More Advanced Networking
- VLANs (Virtual LANs)
- VPNs (Virtual Private Networks)
- Load balancing
- Network security

### Other 42 Projects
- **Born2beroot**: Configure virtual machines with network access
- **Docker projects**: Understand container networking
- **Web servers**: Configure network services

### Professional Certifications
- CompTIA Network+
- Cisco CCNA
- Linux networking certifications

## Study Resources and Practice

### Understanding Binary (Optional but Helpful)
Learning binary helps with subnet calculations:
- `/24` = 24 ones: `11111111.11111111.11111111.00000000`
- `/16` = 16 ones: `11111111.11111111.00000000.00000000`

### Practice Tools
- **Packet Tracer** (Cisco's network simulator)
- **GNS3** (Advanced network simulation)
- **Virtual machines** for hands-on practice

### Key Formulas to Remember
- **Usable hosts**: 2^(32-prefix) - 2
- **Number of subnets**: 2^(borrowed bits)
- **Subnet size**: 256 - last octet of subnet mask

## Troubleshooting Checklist

When your NetPractice level doesn't work:

1. **Check IP addresses**: Are they in the right ranges?
2. **Verify subnet masks**: Do connected devices match?
3. **Examine routing tables**: Can traffic reach its destination?
4. **Look for overlaps**: Are any networks using the same addresses?
5. **Trace the path**: Follow packets from source to destination

## Common Network Commands (For Real Systems)

While NetPractice is visual, these commands help in real networking:

```bash
# Show network configuration
ip addr show

# Show routing table
ip route show

# Test connectivity
ping 192.168.1.1

# Trace network path
traceroute google.com

# Show network statistics
netstat -i
```

## Conclusion

NetPractice teaches you fundamental networking skills that you'll use throughout your tech career. By understanding IP addresses, subnetting, and routing, you're building a foundation that supports everything from web development to system administration.

The key to success is practice and understanding the concepts, not just memorizing. Start with the basics, work through each level systematically, and don't be afraid to draw diagrams and take notes.

Remember: every expert was once a beginner. Take your time, understand each concept, and you'll find that networking becomes much clearer. These skills will serve you well in your career, whether you become a developer, system administrator, or network engineer.

Good luck with NetPractice! The skills you learn here will make you a better technologist and open doors to many exciting career opportunities.